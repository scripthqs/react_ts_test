import React, { PureComponent } from 'react'

interface Iprops {
  name?: string
  age?: number
}

interface Istate {
  name?: string
}

class DemoClass extends PureComponent<Iprops, Istate> {
  state = {
    name: 'liuwenlong'
  }

  /*
// 这一段可以删除, constructor 默认 super 操作
constructor(props: Iprops) {
    super(props)

    this.state = {
      count: 100
    }
  } */

  render(): React.ReactNode {
    return (
      <div>
        {this.props.name}
        {this.props.age}
      </div>
    )
  }
}

export default DemoClass
