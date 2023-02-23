import "@/styles/globals.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "@/component/Container/Container";

export default function App({ Component, pageProps }) {
    return (
        <Container>
            <Component {...pageProps} />
        </Container>
    );
}
