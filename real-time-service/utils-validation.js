const constants = require('./constants');

module.exports = {
    validateClientData: ({ appId, contentType, eventKind, action }) => {
        const isValid = !!appId && !!contentType && !!eventKind && !!action;
        let errorMsg;
        if (!isValid) {
            errorMsg = 'Invalid message contents';
        } else if (action !== constants.msgActions.subscribe && action !== constants.msgActions.unsubscribe) {
            errorMsg = 'Invalid action';
        }
        if (errorMsg) {
            return {
                error: true,
                message: errorMsg
            };
        }
    }
};
