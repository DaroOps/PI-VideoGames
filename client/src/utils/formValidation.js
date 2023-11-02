const formValidation = (form) => {

    const errors = {};

    if (!/^.{1,100}$/.test(form.name)) {
        errors.name = "Name must be between 1 and 100 characters.";
    }

    if (
        !/^(.*\.(jpg|jpeg|png))$|^(?=.+)([1-9]\d{0,7}|100000000)$/.test(form.image)
    ) {
        errors.image =
            "Image must be jpg, jpeg, or png and should not exceed 100MB.";
    }

    if (!/^.{1,255}$/.test(form.description)) {
        errors.description = "Description must be between 1 and 255 characters.";
    }

    if (!/^\[.*\]$/.test(form.platforms)) {
        errors.platforms = "Platforms must be an array.";
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(form.releasedate)) {
        errors.releasedate = "Incorrect date format.";
    }

    if (!/^(0(\.\d{1,2})?|5(\.0{1,2})?|[1-4](\.\d{1,2})?|5)$/.test(form.rating)) {
        errors.rating = "Rating must be between 0.00 and 5.00.";
    }

    if (!Array.isArray(form.genres)) {
        errors.genres = "Genres must be an array.";
    }

    return errors;

}

export default formValidation