import './styles.css'

export const InputSearchValue = ({ onChange }) => (
    <input type={"search"} className="inputSearch" onChange={onChange}
        placeholder="Type your search" />
)