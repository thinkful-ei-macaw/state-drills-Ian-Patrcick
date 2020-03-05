import React, { Component } from 'react'

export default class Accordion extends Component {
  static defaultProps = {
    sections: []
  };

  state = {
    active: null,
  }


  renderItem(section, id, active) {
    return (
      <li className='Accordion__item' key={id}>
        <button
          type='button'
          onClick={() => this.handleSetActiveSecion(id)}
        >
          {section.title}
        </button>
        {(active === id) && <p>{section.content}</p>}
      </li>
    )
  }

  handleSetActiveSecion = (sectionIndex) => {
    this.setState({ active: sectionIndex })
  }

  render() {
    const { active } = this.state
    const { sections } = this.props
    return (
      <ul className='Accordion'>
        {sections.map((section, id) =>
          this.renderItem(section, id, active)
        )}
      </ul>
    )
  }
}