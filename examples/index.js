import { Application, Assets, Sprite } from 'pixi.js';
import { useGuiControlsPanel } from './useGuiControlsPanel.js';
// import { usePresetBox } from './usePresetBox.js';
import { useUploadFile } from './useUploadFile.js';
import { useWebcam } from './useWebcam.js';

(async () =>
{
    const app = new Application();

    await app.init({
        canvas: document.getElementById('playground'),
        width: 590,
        height: 419,
    });

    const texture = await Assets.load('./assets/pic.png');
    const sprite = new Sprite(texture);

    sprite.anchor.set(0);
    app.stage.addChild(sprite);

    app.stage.filters = [];

    const gui = useGuiControlsPanel(app);

    // usePresetBox(app, gui);
    useUploadFile(app, gui);
    useWebcam(app, gui);
})();
