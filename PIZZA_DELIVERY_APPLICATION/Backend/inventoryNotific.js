const threshold = 10;
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const InventoryItem = require('./modelSchema').InventoryItem;
const transporter = require('./nodemailerConfig');

cron.schedule('0 8 * * *', async () => {
    try {
        const items = await InventoryItem.find();
        const lowItems = items.filter(item => item.quantity < threshold);
        if (lowItems.length > 0) {
            let mailText = 'The following items are running low: \n';
            lowItems.forEach(item => {
                mailText += `${item.name}: ${item.quantity}\n`;
            });
            const mailOptions = {
                from: process.env.EMAIL,
                to: process.env.EMAIL,
                subject: 'Inventory Alert',
                text: mailText
            };
            await transporter.sendMail(mailOptions);
        }
    }
    catch (error) {
        console.log(error);
    }
});

module.exports = inventoryNotific;