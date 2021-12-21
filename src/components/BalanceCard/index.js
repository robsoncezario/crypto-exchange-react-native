import React from "react";
import "intl";
import "intl/locale-data/jsonp/en";
import { t } from "../../i18n/index";
import {
  Wrapper,
  Container,
  Column,
  Balance,
  Description,
  BottomRow,
  Button,
  ButtonText,
} from "./styles";

export default function BalanceCard() {
  const handleOpenDeposit = () => {};

  const handleOpenWithdraw = () => {};

  return (
    <Wrapper>
      <Container>
        <Column>
          <Balance>
            $
            {new Intl.NumberFormat("en-US", {
              currency: "USD",
              compactDisplay: "short",
              notation: "compact",
            }).format(22776)}
          </Balance>
          <Description>{t("home.balance")}</Description>
        </Column>

        <BottomRow>
          <Button onPress={handleOpenDeposit}>
            <ButtonText>{t("home.deposit")}</ButtonText>
          </Button>

          <Button onPress={handleOpenWithdraw} style={{ marginLeft: 10 }}>
            <ButtonText>{t("home.withdraw")}</ButtonText>
          </Button>
        </BottomRow>
      </Container>
    </Wrapper>
  );
}
