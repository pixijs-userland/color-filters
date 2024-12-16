import { Sprite, Texture } from 'pixi.js';

export function useWebcam(app)
{
    document.getElementById('webcam').addEventListener('click', () =>
    {
        navigator.mediaDevices
            .getUserMedia({
                video: true,
                audio: false,
            })
            .then((stream) =>
            {
                const videoEl = document.createElement('video');

                videoEl.onloadedmetadata = () =>
                {
                    videoEl.play();
                    app.stage.removeChildAt(0);

                    const texture = Texture.from(videoEl);
                    /** @type {HTMLVideoElement}*/
                    const videoTexture = texture.baseTexture.resource.source;

                    videoTexture.autoplay = true;
                    videoTexture.muted = true;

                    const videoSprite = new Sprite(texture);

                    app.stage.addChild(videoSprite);
                };
                videoEl.srcObject = stream;
            })
            .catch(() =>
            {
                console.error('Webcam Permissions Denied');
            });
    });
}
