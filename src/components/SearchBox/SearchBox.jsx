import css from './SearchBox.module.css'; 


const SearchBox = ({value, setFilter}) => {
  return (
    <div>
      <label className={css.label}>
        <div className={css.labelName}>Find contacts by name</div>
        <input className={css.input } type="text"  value={value } onChange={(e) => setFilter(e.target.value)}/>
      </label>
    </div>
  )
}

export default SearchBox
