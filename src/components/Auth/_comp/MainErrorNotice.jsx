const TYPES = {
    REQUIRED: 'required',
    PATTERN: 'pattern',
}

function MainErrorNotice ({errors}) {
    if (!Object.keys(errors).length) {
        return;
    }
    const errorKeys = Object.keys(errors);
    const errorValues = Object.values(errors);

    return (
        <div className="border-2 border-red space-x-6 rounded bg-red-400">
            <h4>
                There has been an error while submitting the form.
            </h4>

            <ul className="mb-2 text-xs list-disc">
                {errorValues.map((error, index) => {
                    const fieldKey = errorKeys[index];
                    let message = '';
                    
                    if (error.type === TYPES.REQUIRED) {
                        message = `${fieldKey}: can't be empty;`;
                    } else if (error.type === TYPES.PATTERN) {
                        message = `${fieldKey}: doesn't meet the requirements.`;
                    } else if (error.message.length > 0 ){
                        message = error.message;
                    }

                    return(
                        <li key={Math.random().toString()}>
                            {message}
                        </li>
                    )
                })}
            </ul>   
        </div>
    )
}

export default MainErrorNotice;