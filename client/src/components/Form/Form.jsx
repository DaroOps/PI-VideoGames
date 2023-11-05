import React, { useState } from "react";
import InputField from "../InputField/InputField";
import formValidation from "../../utils/formValidation";
import { useSelector } from "react-redux";

import './Form.modules.css'
import InputRating from "../InputRating/InputRating";
import axios from "axios";
import TagCheckBox from "../TagCheckBox/TagCheckBox";
import InputArea from "../InputArea/InputArea";

import Game from '../Game/Game';

const Form = () => {

    const genres = useSelector(state => state.genres);


    const [form, setForm] = useState({
        name: "",
        image: "",
        description: "",
        platforms: "",
        releasedate: "",
        rating: "",
        genres: [],
    });

    const [errors, setErrors] = useState({});

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        let updatedForm = { ...form };


        if (property === 'genres') {

            if (event.target.checked) {

                updatedForm.genres.push(value);
            } else {
                updatedForm.genres = updatedForm.genres.filter(genre => genre !== value);
            }
        }
        else {
            updatedForm = { ...form, [property]: value };
        }

        // console.log(updatedForm.genres);
        // console.log(form.genres);

        const validationErrors = formValidation(updatedForm);
        setForm(updatedForm);
        setErrors(validationErrors);

    };

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/videogames", form)
            .then(res => alert(console.log(res), console.log('FORM SENDED', form))).catch(error => {
                console.error(error.message);
            });
    };

    return (


        <form className="form" onSubmit={submitHandler}>
            <div className="form-input-field">
                <div className="header-field">
                    <div className="preview-fields">
                        <div className="fields">
                            <InputField
                                label="Name"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={changeHandler}
                                error={errors.name}
                            />
                            <InputArea
                                label="Description"
                                type="text"
                                name="description"
                                value={form.description}
                                onChange={changeHandler}
                                error={errors.description}
                            />
                            <InputField
                                label="Image Link"
                                type="text"
                                name="image"
                                value={form.image}
                                onChange={changeHandler}
                                error={errors.image}
                            />
                            <InputField

                                label="Release Date"
                                type="date"
                                name="releasedate"
                                value={form.releasedate}
                                onChange={changeHandler}
                                error={errors.releaseDate}
                            />
                        </div>

                    </div>
                    <div className="preview">

                        <Game
                            name={form.name}
                            image={form.image}


                        />


                    </div>
                </div>

                <div className="form-rating">

                    <InputRating
                        name="rating"
                        onChange={changeHandler}
                        error={errors.rating}
                    />
                </div>
                <div class="tag-flex">
                    {
                        genres.map(option => {
                            return (<TagCheckBox
                                key={option}
                                label={option}
                                name='genres'
                                type="checkbox"
                                value={option}
                                onChange={changeHandler}
                            />);
                        })
                    }
                </div>
            </div>

            <InputField
                label="Platforms"
                type="text"
                name="platforms"
                value={form.platforms}
                onChange={changeHandler}
                error={errors.platforms}
            />

            {console.log('errors', errors)}
            <button className="fancy" type="Submit" disabled={Object.keys(errors).length > 0}>
                <span className="top-key"></span>
                <span className="text-post">Create Videogame</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
            </button>
        </form>


    );
};

export default Form;



