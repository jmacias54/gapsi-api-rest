const providerSchema = require("../models/provider");

exports.createProvider = async (req, res) => {
  try {
    const { name} = req.body;
    // Verificar si el proveedor ya existe
    const existingProvider = await providerSchema.findOne({ name });

    if (existingProvider) {
      return res.status(409).json({ error: 'El proveedor ya existe' });
    }

    // Si no existe, crear y guardar el proveedor
    const provider = new providerSchema(req.body);
    await provider.save();

    res.status(201).json(provider);
  } catch (error) {
    res.status(500).json({ error: 'Error al insertar el proveedor' });
  }
};
