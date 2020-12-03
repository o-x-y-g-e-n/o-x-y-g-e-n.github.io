import styled from "styled-components"
import { Algolia } from "styled-icons/fa-brands/Algolia"

import * as V from "styles/variables"
import * as T from "styles/typography"

export const Search = styled.section`
  display: block;

  .ais {
    &-InstantSearch__root {
      position: relative;
    }

    &-SearchBox {
      margin-bottom: ${V.Space.md};
      position: relative;

      &-input {
        -webkit-appearance: none;
        background-color: var(--bg);
        border: ${V.Border.box};
        color: var(--primaryColor);
        display: block;
        font-size: 1.8rem;
        height: ${V.Space.lg};
        line-height: ${V.Space.lg};
        padding-left: ${V.Space.sm};
        padding-right: ${V.Space.xxlg};
        width: 100%;
      }

      &-reset,
      &-submit {
        align-items: center;
        border-left: ${V.Border.box};
        color: var(--secondaryColor);
        cursor: pointer;
        display: flex;
        height: 100%;
        justify-content: center;
        position: absolute;
        right: 0;
        top: 0;
        transition: color ${V.Transition.default};
        width: ${V.Space.lg};
        will-change: color;
      }

      &-submit {
        &:hover,
        &:focus {
          color: var(--highlightColor);
        }
      }

      &-reset {
        border: none;
        margin-right: ${V.Space.lg};

        &[hidden] {
          display: none;
        }

        &:hover,
        &:focus {
          color: var(--highlightColor);
        }
      }

      &-submitIcon {
        height: ${V.Space.sm};
        width: ${V.Space.sm};
      }
    }

    &-Stats {
      ${T.Text2}
      color: var(--secondaryColor);
      margin-bottom: ${V.Space.xs};
    }

    &-Hits {
      &-item {
        &:not(:last-child) {
          margin-bottom: ${V.Space.default};
        }
      }
    }
  }
`

export const Title = styled.h1`
  ${T.Text2}
  align-items: center;
  color: var(--secondaryColor);
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${V.Space.sm};
  padding-top: ${V.Space.sm};
`

export const AlgoliaIcon = styled(Algolia)`
  height: ${V.Space.sm};
  margin-left: ${V.Space.xxs};
  width: ${V.Space.sm};
`
