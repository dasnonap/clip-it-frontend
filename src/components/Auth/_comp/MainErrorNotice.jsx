function MainErrorNotice ({hasErrors}) {
    if (hasErrors == false) {
        return;
    }

    return (
        <div className="border-2 border-red space-x-4 space-y-6 rounded bg-red-400">
            There has been an error while submitting the form.
        </div>
    )
}

export default MainErrorNotice;