import React from "react";
import "intl";
import "intl/locale-data/jsonp/en";
import {
  Container,
  Description,
  BTCBalance,
  USDBalance,
  FirstCircle,
  SecondCircle,
} from "./styles";
import { t } from "../../i18n/index";

export default function Balance({ btc, usd }) {
  return (
    <Container>
      <Description>{t("wallet.availableBalance")}</Description>
      <BTCBalance>{btc.toFixed(8)} BTC</BTCBalance>
      <USDBalance>
        ={" "}
        {new Intl.NumberFormat("en-US", {
          currency: "USD",
          compactDisplay: "short",
          notation: "compact",
        }).format(usd)}{" "}
        USD
      </USDBalance>
      <SecondCircle />
      <FirstCircle />
    </Container>
  );
}
