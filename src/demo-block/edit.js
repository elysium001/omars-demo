// Import packages
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, ColorPicker } from '@wordpress/components';

// Register the block
registerBlockType('omars-plugins/demo-block', {
    attributes: {
        title: {
            type: 'string',
            default: 'Hello World!',
        },
        bgColor: {
            type: 'string',
            default: '#f00',
        },
    },
    edit: (props) => {
        const { title, bgColor } = props.attributes;

        return (<div {...useBlockProps()}>
            <InspectorControls key="setting">
                <div id="gutenpride-controls">
                    <fieldset>
                        <legend className="blocks-base-control__label">
                            {__('Title', 'gutenpride')}
                        </legend>
                        <TextControl
                            value={title}
                            onChange={(value) => props.setAttributes({ title: value })} />
                        <ColorPicker
                            color={bgColor}
                            onChange={(value) => props.setAttributes({ bgColor: value })}
                            enableAlpha
                            defaultValue="#000"
                        />
                    </fieldset>
                </div>
            </InspectorControls>

            { title && <omars-demo title={title} bg-color={bgColor}></omars-demo> }
        </div>)
    },
    save: () => null,
});