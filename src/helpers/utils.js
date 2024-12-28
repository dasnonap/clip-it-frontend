/**
 * Parse Error Object and returns new object easier to handle
 * @param {Object} error the Error object, if empty return default Error message
 * @returns Parsed error message
 */
const parseErrorResponse = (error) => {
    const TYPE_AUTH = 'authentication';
    const TYPE_FIELD_VALIDATION = 'validation';
    const DEFAULT_MESSAGE = 'There has been an error. Please try again later';
    let result = DEFAULT_MESSAGE;

    if (!error || !error.response) {
        console.error('Default error exception');
        return result;
    }

    const data = error.response.data;

    if (!data || data.success === true) {
        console.error('Empty data exception point');

        return result;
    }

    if (!data.errors) {
        // If no specified errors, return the general Error message
        result = data.message;

        return result;
    }

    switch (data.errors.type) {
        case TYPE_AUTH:
            result = data.errors.message;
            break;
        case TYPE_FIELD_VALIDATION:
            console.error('NOT IMPLEMENTED');
            break;
        default:
            console.error('Error type not handled exception.');
            break;
    }
    
    return result;
}

export default {parseErrorResponse};