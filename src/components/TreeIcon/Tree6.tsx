import { Box } from '@kuma-ui/core'
import { Tree6 as TreeImage } from './TreeList'

export const Tree6 = () => {
  return (
    <span>
      <img src={TreeImage} alt='logo' width={40} height={65} />
      <Box bgColor={'#593D23'} width={'auto'} height={5} mt={'-5px'} />
    </span>
  )
}
