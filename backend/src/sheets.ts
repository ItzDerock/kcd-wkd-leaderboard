import config from "./config";
import { GoogleSpreadsheet } from "google-spreadsheet";
import getLogger from "./utils/logger";

const document = new GoogleSpreadsheet(config.googleSheets.sheetId);
export default document;

document.useApiKey(config.googleSheets.apiKey);
document.loadInfo().then(() => {
    getLogger('google-sheets').info(`Loaded document "${document.title}"`);
}).catch(error => {
    getLogger('google-sheets').error(`Failed to load document "${config.googleSheets}"`, error);
});