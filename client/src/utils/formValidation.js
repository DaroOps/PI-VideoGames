const formValidation = (form) => {

    const errors = {};
    if (!form.name.trim()) {
        errors.name = "Name is required.";
    }

    if (!form.image.trim()) {
        errors.image = "Image URL is required.";
    }

    if (!form.description.trim()) {
        errors.description = "Description is required.";
    }

    if (!form.platforms.trim()) {
        errors.platforms = "Platforms are required.";
    }

    if (!form.releasedate.trim()) {
        errors.releasedate = "Release date is required.";
    }

    if (!form.rating.trim()) {
        errors.rating = "Rating is required.";
    }

    if (!Array.isArray(form.genres) || form.genres.length === 0) {
        errors.genres = "At least one genre is required.";
    }

    if (!/^.{1,100}$/.test(form.name)) {
        errors.name = "Name must be between 1 and 100 characters.";
    }



    if (
        !/^https?:\/\/.*\.(jpg|jpeg|png)$/i.test(form.image)
    ) {
        errors.image = "Please enter a valid image URL (jpg, jpeg, or png).";
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