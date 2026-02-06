import { Actions, Badge, BadgeText, Body, Card, Code, Dot, Page, PrimaryLink, SecondaryButton, Text, Title, Top } from "./NotFoundPage.styled";

export function NotFoundPage() {
  return (
    <Page>
      <Card>
        <Top>
          <Badge>
            <Dot />
            <BadgeText>Oops… похоже, мы не туда свернули</BadgeText>
          </Badge>

          <Code>404</Code>
        </Top>

        <Body>
          <Title>Страница не найдена</Title>
          <Text>
            Возможно, ссылка устарела или страница была удалена. Вернись на главную —
            там всё в порядке.
          </Text>

          <Actions>
            <PrimaryLink to="/">На главную</PrimaryLink>
            <SecondaryButton type="button" onClick={() => window.history.back()}>
              Назад
            </SecondaryButton>
          </Actions>
        </Body>
      </Card>
    </Page>
  );
}