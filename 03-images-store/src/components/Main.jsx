
export function Main({ history, gallery }){
    return(
        <main>
            <h1>Image's Gallery created by Cristian Delgado </h1>
        
            <section>
                <ul>
                    {
                        history.map((item, index) => {
                            return(
                            <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </section>
        
            <section>
                <div className="grid-responsive">
                    {
                        gallery.map((image) => {
                            return(
                            <div key={image.id}>
                                <img src={image.urls.small} alt={image.description || 'image lost'} />
                            </div>
                            )
                        })
                    }
                </div>
            </section>

      </main>
    )
}