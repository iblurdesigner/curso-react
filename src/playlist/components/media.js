import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
  // constructor(props){ //esta es la forma de hacer con ES6
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  //   this.handleClick = this.handleClick.bind(this);
  // }
  state = {
    author: 'Leonidas Esteban'
  }
  handleClick = (event) => { // esta es la forma de hacerlo con ES7
    // this.setState({
    //   author: 'Ricardo Celis',
    // })
    this.props.openModal(this.props);
  }

  render(){
    const style = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return(
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
}

export default Media;
