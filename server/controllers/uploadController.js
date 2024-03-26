const File = require('../models/File');

// Controller function to handle file upload
exports.uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Create a new file instance using the File model
        const newFile = new File({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileSize: req.file.size,
            fileType: req.file.mimetype
        });

        // Save the file details to the database
        await newFile.save();

        res.status(200).json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller function to fetch recent uploads
exports.getRecentUploads = async (req, res) => {
    try {
        // Fetch recent uploads from the database
        const recentUploads = await File.find().sort({ uploadDate: -1 }).limit(5);

        res.status(200).json(recentUploads);
    } catch (error) {
        console.error('Error fetching recent uploads:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
