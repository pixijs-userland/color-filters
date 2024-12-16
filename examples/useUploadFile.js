import { Sprite } from 'pixi.js';

export function useUploadFile(app)
{
    document.getElementById('fileElem').addEventListener('change', (ev) =>
    {
        const target = ev.target;
        const file = target.files[0];
        const objectURL = window.URL.createObjectURL(file);
        const sprite = Sprite.from(objectURL);

        sprite.anchor.set(0);
        app.stage.removeChildAt(0);
        app.stage.addChild(sprite);
    });
}
