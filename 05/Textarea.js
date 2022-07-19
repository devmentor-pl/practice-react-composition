import React from 'react';

const Textarea = React.forwardRef( (props, ref) => {

    const { onChange } = props;

    return (
        <textarea
            ref={ref}
            onChange={ () => onChange(ref.current.value) }
        >
        </textarea>
    )
});

export default Textarea;

