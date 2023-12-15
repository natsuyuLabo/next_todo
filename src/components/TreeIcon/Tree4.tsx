import { Box } from '@kuma-ui/core'
import { Tree4 as TreeImage } from './TreeList'

export const Tree4 = () => {
  return (
    <span>
      <img src={TreeImage} alt='logo' width={34} height={65} />
      <Box bgColor={'#593D23'} width={'auto'} height={5} mt={'-5px'} />
    </span>
  )
}
