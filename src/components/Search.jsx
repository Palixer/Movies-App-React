import styles from "./Search.module.css";
import { FaSearch } from "react-icon/fa";
import { useSearchParams } from "react-router-dom";


export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");


    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form className={StyleSheet.searchContainer} onSubmit={handleSubmit}>
            <div className={StyleSheet.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={search ?? ""}
                    autoFocus
                    placeholder="Title"
                    aria-label="Search Movies"
                    onChange={(e) => {
                        const value = e.target.value;

                        setQuery({search: value})
                        // navigate("/?search=" + value);
                    }}
                />
                <FaSearch size={20} color="black" className={styles.searchButton} />
            </div>
        </form>
    );
}