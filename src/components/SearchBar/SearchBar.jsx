import { useState } from "react"
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {

    const [value, setValue] = useState('');

    const handlSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            toast.error('Please enter a query!');
            return;
        }
        onSubmit(value.trim());
        setValue('');
    }

    return (


        <header>
            <form onSubmit={handlSubmit}>
                <input onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>


    )

}

export default SearchBar
