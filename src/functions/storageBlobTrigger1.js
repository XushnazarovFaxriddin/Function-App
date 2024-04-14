const { app } = require('@azure/functions');

app.storageBlob('storageBlobTrigger1', {
    path: 'samples-workitems/{name}',
    connection: 'storageaccountfxr_STORAGE',
    handler: (blob, context) => {
        context.log(`Storage blob function processed blob "${context.triggerMetadata.name}" with size ${blob.length} bytes`);
    }
});
