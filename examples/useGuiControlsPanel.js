import GUI from 'lil-gui';
import * as filters from '@pixi/color-filters';

export function useGuiControlsPanel(app)
{
    //  gen controls panel
    const gui = new GUI();

    const controls = {
        reset: () =>
        {
            gui.reset(true);
            app.stage.filters = [];
        },
        filters: {
            Vibrance: {
                enable: false,
                value: 0,
            },
            Saturation: {
                enable: false,
                value: 0,
            },
            Temperature: {
                enable: false,
                value: 0,
            },
            Tint: {
                enable: false,
                value: 0,
            },
            Hue: {
                enable: false,
                value: 0,
            },
            Brightness: {
                enable: false,
                value: 0,
            },
            Exposure: {
                enable: false,
                value: 0,
            },
            Contrast: {
                enable: false,
                value: 0,
            },
            Black: {
                enable: false,
                value: 0,
            },
            White: {
                enable: false,
                value: 0,
            },
            Highlights: {
                enable: false,
                value: 0,
            },
            Shadows: {
                enable: false,
                value: 0,
            },
            Sharpen: {
                enable: false,
                value: 0,
                _valueMin: 0,
                _valueMax: 1,
            },
            Clarity: {
                enable: false,
                value: 0,
            },
            Smooth: {
                enable: false,
                value: 0,
                _valueMin: 0,
                _valueMax: 1,
            },
            Blur: {
                enable: false,
                value: 0,
                _valueMin: 0,
                _valueMax: 1,
            },
            Grain: {
                enable: false,
                value: 0,
                _valueMin: 0,
                _valueMax: 1,
            },
            VignetteWhite: {
                enable: false,
                value: 0,
                _valueMin: 0,
                _valueMax: 1,
            },
            VignetteBlack: {
                enable: false,
                value: 0,
                _valueMin: 0,
                _valueMax: 1,
            },
            Glamour: {
                enable: false,
                value: 0,
                _valueMin: 0,
                _valueMax: 1,
            },
            Bloom: {
                enable: false,
                value: 0,
                _valueMin: 0,
                _valueMax: 1,
            },
            Dehaze: {
                enable: false,
                value: 0,
                _valueMin: 0,
                _valueMax: 1,
            },
            Toning: {
                enable: false,
                value: 0,
                _valueMin: 0,
                _valueMax: 1,
                lightColor: '#f20',
                darkColor: '#f0f',
            },
            Fill: {
                enable: false,
                value: 0,
                _valueMin: 0,
                _valueMax: 1,
                fillColor: '#f20',
                mode: 'softLight',
                _modeOptions: [
                    'default',
                    'screen',
                    'overlay',
                    'multiply',
                    'colorDodge',
                    'colorBurn',
                    'hardLight',
                    'softLight',
                    'vividLight',
                ],
            },
        },
    };

    //  set a filter name that used in event
    Object.keys(controls.filters).forEach((key) =>
    {
        controls.filters[key].__name = key;
    });

    gui.add(controls, 'reset'); // button

    //  gen filter's controls panel
    for (const filter in controls.filters)
    {
        const name = filter.charAt(0).toUpperCase() + filter.slice(1);
        const filterName = filter;
        const folder = gui.addFolder(name).close();

        for (const key in controls.filters[filterName])
        {
            const value = controls.filters[filterName][key];

            if (key.charAt(0) === '_')
            {
                continue;
            }

            if (typeof value === 'number')
            {
                const min = controls.filters[filterName][`_${key}Min`] ?? -1;
                const max = controls.filters[filterName][`_${key}Max`] ?? 1;

                folder.add(controls.filters[filterName], key, min, max, 0.05);
            }
            else if (value.charAt && value.charAt(0) === '#')
            {
                //  color
                folder.addColor(controls.filters[filterName], key);
            }
            else if (typeof value === 'string')
            {
                //  select
                const options = controls.filters[filterName][`_${key}Options`];

                if (options)
                {
                    folder.add(controls.filters[filterName], key, options);
                }
            }
            else
            {
                folder.add(controls.filters[filterName], key);
            }
        }
    }

    //  event handler
    gui.onChange(({ property, value, object }) =>
    {
        const filterName = object.__name;

        //  add or remove filter
        if (property === 'enable')
        {
            if (value)
            {
                app.stage.filters = [...app.stage.filters, new filters[filterName]()];
            }
            else
            {
                const targetFilter = app.stage.filters.find((filter) =>
                    filter instanceof filters[filterName]);

                const index = app.stage.filters.indexOf(targetFilter);

                app.stage.filters = [...app.stage.filters].splice(index, 1);
            }
        }
        else
        {
            if (!object.enable) return;

            const targetFilter = app.stage.filters.find((filter) =>
                filter instanceof filters[filterName]);

            targetFilter[property] = value;
        }
    });

    return gui;
}
