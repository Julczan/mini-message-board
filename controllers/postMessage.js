const { body, validationResult, matchedData } = require("express-validator");

const validateUser = [
  body("username")
    .trim()
    .isAlpha()
    .withMessage(`Name must only contain letters.`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Name must be between 1 and 10 characters.`),
];

const validateMessage = [
  body("message")
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("Message must be between 1 and 50 characters."),
];

exports.postMessage = [
  validateUser,
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
      });
    }
    const { message, username } = matchedData(req);

    await message.insertMessage({ message, username });
    res.redirect("/");
  },
];
