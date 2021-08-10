import React from 'react'
import { useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import {
  Container,
  Row,
  Button,
  Title
} from './styles'
import {t} from '../../i18n/index'
import { useTheme } from 'styled-components/native'

export default function Header() {
  const route = useRoute()
  const theme = useTheme()

  return (
    <Container>
      <Title>{t('common.' + route.name.toLowerCase())}</Title>

      <Row>
        <Button>
          <AntDesign name='search1' size={16} color={theme.text.colors.primary} />
        </Button>

        <Button style={{marginLeft: 10}}>
          <AntDesign name='bells' size={16} color={theme.text.colors.primary} />
        </Button>
      </Row>
    </Container>
  )
}