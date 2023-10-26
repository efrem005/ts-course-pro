import styles from './Search.module.scss';
import searchIcon from '../../assets/icon-search.svg'
import React from "react";
import { Button } from "../Button";

interface SearchProps {
    hasError: boolean,
    onSubmit: (text:string) => void
}

type FormFields = {
    username: HTMLInputElement
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
        event.preventDefault()
        const text = event.currentTarget.username.value
        if (text.trim()) {
            onSubmit(text)
            event.currentTarget.reset()
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className={styles.search}>
                <label htmlFor="search" className={styles.label}>
                    <img src={searchIcon} alt="search" />
                </label>
                <input
                    type="text"
                    className={styles.textField}
                    id="search"
                    name="username"
                    placeholder="Search GitHub username..."
                />
                {hasError && (
                    <div className={styles.error}>
                        No result
                    </div>
                )}
                <Button>Search</Button>
            </div>
        </form>
    );
}
