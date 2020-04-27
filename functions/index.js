const functions = require("firebase-functions");
// const gcs = require("@google-cloud/storage")(gcconfig);
const os = require("os");
const path = require("path");
const admin = require("firebase-admin");
const gmailEmail = functions.config().gmail.email;
const cors = require("cors")({ origin: true });
const spawn = require("child-process-promise").spawn;
const Busboy = require("busboy");
// const fs = require("fs");
// const gcconfig = {
//   projectId: "marioplan-lr",
//   keyFilename: "marioplan-lr-firebase-adminsdk-jh56m-2971936b78.json",
// };

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello ninjas!");
});

// exports.onFileChange = functions.storage.object().onChange((event) => {
//   const object = event.data;
//   const bucket = object.bucket;
//   const contentType = object.contentType;
//   const filePath = object.name;

//   if (object.resourceState === "not_exists") {
//     return;
//   }

//   if (path.basename(filePath).startsWith("resized-")) {
//     return;
//   }

//   const destBucket = gcs.bucket(bucket);
//   const tmpFilePath = path.join(os.tmpdir(), path.basename(filepath));
//   const metadata = { contentType: contentType };
//   return destBucket
//     .file(filePath)
//     .downlad({
//       destination: tmpFilePath,
//     })
//     .then(() => {
//       return spawn("convert", [tmpFilePath, "-resize", "500x500", tmpFilePath]);
//     })
//     .then(() => {
//       return destBucket.upload(tmpFilePath, {
//         destination: "resized-" + path.basename(filePath),
//         metadata: metadata,
//       });
//     });
// });

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc));
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authourLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };

      return createNotification(notification);
    });
});

// exports.uploadFile = functions.https.onRequest((req, res) => {
//   cors(req, res, () => {
//     if (req.method !== "POST") {
//       return res.status(500).json({
//         message: "Not allowed",
//       });
//     }
//     const busboy = new Busboy({ headers: req.headers });
//     let uploadData = null;

//     busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
//       const filepath = path.join(os.tmpdir(), filename);
//       uploadData = { file: filepath, type: mimetype };
//       file.pipe(fs.createWriteStream(filepath));
//     });

//     busboy.on("finish", () => {
//       const bucket = gcs.bucket("marioplan-lr.appspot.com");
//       bucket
//         .upload(uploadData.file, {
//           uploadType: "media",
//           metadata: {
//             metadata: {
//               contentType: uploadData.type,
//             },
//           },
//         })
//         .then(() => {
//           res.status(200).json({
//             message: "It worked!",
//           });
//         })
//         .catch((err) => {
//           res.status(500).json({
//             error: err,
//           });
//         });
//     });
//     busboy.end(req.rawBody);
//   });
// });

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return;
    }

    const mailOptions = {
      from: req.body.email,
      replyTo: req.body.email,
      to: gmailEmail,
      subject: `from my website ${req.body.email}`,
      text: req.body.message,
      html: `<p>${req.body.message}`,
    };

    mailTransport.sendMail(mailOptions);

    res.status(200).end();
    // or you can pass data to indicate success.
    // res.status(200).send({isEmailSend: true});
  });
});
