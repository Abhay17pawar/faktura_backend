const { language } = require('../models'); // adjust path as needed

exports.getSelectedLanguage = async (req, res) => {
  try {
    const id = req.params.id || 1;
    const lang = await language.findByPk(id);

    if (!lang) {
      return res.status(404).json({ message: 'Language details not found' });
    }

    res.status(200).json(lang);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// POST new language details
exports.postLanguageDetails = async (req, res) => {
  try {
    const { home, our_customers, about_us, contact_us, button, paragraph } = req.body;

    if (!home || !our_customers || !about_us || !contact_us || !button || !paragraph) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newLang = await language.create({
      home,
      our_customers,
      about_us,
      contact_us,
      button,
      paragraph,
    });

    res.status(201).json(newLang);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
