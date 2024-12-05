
export function Header ({ searchImage, handleInputChange, query }) {
    return(
        <header>
            <form onSubmit={searchImage}>
                <input type="text" onChange={handleInputChange} value={query} placeholder='Busca una imagen' />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </header>
    )
}