import { Tree1 } from './Tree1'
import { Tree2 } from './Tree2'
import { Tree3 } from './Tree3'
import { Tree4 } from './Tree4'
import { Tree5 } from './Tree5'
import { Tree6 } from './Tree6'
import { Tree7 } from './Tree7'
import { Tree8 } from './Tree8'
import { Tree9 } from './Tree9'
import React from 'react'

type SwitchTreeComponentsType = {
  numbering: number
}

const TreeComponentMap: Record<number, React.ReactElement> = {
  1: <Tree1 />,
  2: <Tree2 />,
  3: <Tree3 />,
  4: <Tree4 />,
  5: <Tree5 />,
  6: <Tree6 />,
  7: <Tree7 />,
  8: <Tree8 />,
  9: <Tree9 />
}

export const SwitchTreeComponents: React.FC<SwitchTreeComponentsType> = ({ numbering }) => {
  const treeComponent = TreeComponentMap[numbering] || null

  return <>{treeComponent}</>
}
