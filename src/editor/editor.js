import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { ContactSupportOutlined } from '@material-ui/icons';

class EditorComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        };
    }
    render() {
        
        
        const { classes } = this.props;

        return (
            <div className={classes.editorContainer}>
                <ReactQuill
                    value={this.state.text} onChange={this.updateBody}
                ></ReactQuill>
            </div>
        )
    }
    updateBody = async (val) => {
        await this.setState({ text: val });
        this.update();
    };
    update = debounce(() => {
        console.log('updating database');
    })
}

export default withStyles(styles)(EditorComponent)