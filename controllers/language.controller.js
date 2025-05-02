exports.getSelectedLanguage = async (req, res) => {
  try {
    const id = req.params.id;
    const lang = await req.server.models.Language.findByPk(id);

    if (!lang) {
      return res.status(404).send({ message: 'Language details not found' });
    }

    return res.status(200).send(lang);
  } catch (error) {
    return res.status(500).send({ message: 'Server error', error: error.message });
  }
};

exports.postLanguageDetails = async (req, res) => {
  try {
    const { home, our_customers, about_us, contact_us, button, paragraph, order, terms } = req.body;

    if (!home || !our_customers || !about_us || !contact_us || !button || !paragraph || !order || !terms) {
      return res.status(400).send({ message: 'All fields are required' });
    }

    const newLang = await req.server.models.Language.create({
      home,
      order,
      our_customers,
      about_us,
      contact_us,
      terms,
      button,
      paragraph,
    });

    return res.status(201).send(newLang);
  } catch (error) {
    return res.status(500).send({ message: 'Server error', error: error.message });
  }
};
