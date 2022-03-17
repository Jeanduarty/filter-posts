import './styles.css'

export const Button = ({disabled, onclick}) => (
    <button className='button' onClick={onclick} disabled={disabled}>
        Load More Posts
    </button>
)
