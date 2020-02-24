//Helper function to load a JSON database from a specified link

import * as FileSystem from 'expo-file-system'

export function loadDB() {
    // fileID="1DKCc7SmVXJuzIcxmyQ5nRnl6jpRUZ7bn"
    fileID = "1FWi7nbD3-E9y4uCErq2Y6Ouyf0pt194K"
    remoteUri = `https://drive.google.com/uc?export=download&id=${fileID}`
    filePath = `${FileSystem.documentDirectory}omt_db.json`;
    return FileSystem.downloadAsync(remoteUri, filePath);
}
