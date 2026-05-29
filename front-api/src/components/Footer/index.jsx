import './style.css'

export default function Footer() {
    return(
        <Footer className= 'footer'>
            <p>
                &copy; {new Date().getFullYear()} -
                Todos os direitos reservados .
            
                <br />
                SENAI BAHIA
            </p>
        </Footer>
    )
}