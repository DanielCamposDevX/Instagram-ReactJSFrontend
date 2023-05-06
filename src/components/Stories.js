import Story from "./Story"
export default function Stories() {
    return (
        <div class="stories">
            <div class="story">
                <div class="imagem">
                    <img src="assets/img/9gag.svg" alt="9gag" />
                </div>
                <div class="usuario">
                    9gag
                </div>
            </div>

            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}