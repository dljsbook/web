import * as React from 'react';
import styled from 'react-emotion';
import { colors } from '../styles/variables';

const OFFSET_PADDING = 255;

const Container = styled.div`
  width: 260px;
  margin-left: 15px;
  position: sticky;
  top: 20px;

  ul {
    list-style: none;
    margin-bottom: 0;
  }
`;

type IListItem = {
  title: string;
  url: string;
  items: IListItem[];
};


interface ToCProps {
  contents?: {
    items: IListItem[];
  };
  depth: number;
}

interface ToCState {
  scroll: number;
}

class ToC extends React.Component<ToCProps, ToCState> {
  state = {
    scroll: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  scroll = () => {
    this.setState({
      scroll: window.pageYOffset,
    });
  }

  render() {
    const {
      contents,
      depth,
    } = this.props;

    if (!contents) {
      return null;
    }

    return (
      <Container>
        <List
          items={contents.items}
          height={depth}
          scroll={this.state.scroll}
        />
      </Container>
    );
  }
}

const StyledList = styled.ul`
  padding: 0 0 10px 0;

  ul {
    display: none;
  }
`;


interface IStyledListItemProps {
  active: boolean;
  padding: number;
}

const StyledListItem = styled.li<IStyledListItemProps>`
  > a {
    font-size: 12px;
    padding: 1px 0 1px ${props => props.padding + 30}px;
    font-weight: 400;
    display: block;
    color: #767676;
    border-left: 1px solid transparent;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: ${colors.strongBrand};
      border-left: 1px solid ${colors.strongBrand};
    }
  }

  ${props => props.active === true ? `
  ul {
    display: block;
  }

  > a {
    color: ${colors.strongBrand};
    border-left: 1px solid ${colors.strongBrand};
  }
  ` : ` `}
`;

interface IListProps {
  items: IListItem[];
  height: number;
  scroll: number;
  padding?: number;
}

const List:React.SFC<IListProps> = ({ items, height, scroll, padding }) => {
  if (height <= 0) {
    return null;
  }

  const activeItem = Object.entries(anchorLinks[height] || {}).reverse().reduce((found: null|string, [link, el]) => {
    if (found) {
      return found;
    }

    if (scroll > el.offsetTop + OFFSET_PADDING) {
      return link;
    }

    return null;
  }, null);

  return (
  <StyledList>
    {items.map((item) => {
    return (
      <ListItem
        scroll={scroll}
        item={item}
        key={item.title}
        height={height}
        active={activeItem === parseAnchor(item.title)}
        padding={(padding || 0)}
      />
      );
      })}
  </StyledList>
  );
};

interface IListItemProps {
  item: IListItem;
  height: number;
  scroll: number;
  active: boolean;
  padding: number;
}

const ListItem:React.SFC<IListItemProps> = ({
  active,
  item: {
    title,
    items,
  },
  height,
  scroll,
  padding,
}) => {
  const anchor = parseAnchor(title);
  return (
    <StyledListItem active={active} padding={padding}>
      <a href={`#${anchor}`}>{title}</a>
      {items && (
        <List
          items={items}
          height={height - 1}
          scroll={scroll}
          padding={padding + 10}
        />
      )}
    </StyledListItem>
  );
};

    export default ToC;

const anchorLinks: {
  [index: number]: {
    [index: string]: HTMLElement;
  };
} = {};

export const addAnchorLinks = (depth: number) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].slice(0, depth).reduce((components, H, index) => {
  return {
    ...components,
    [H]: (props: { children: string }) => {
      const anchor = parseAnchor(props.children);
      return (
        <React.Fragment>
          <a name={anchor} />
          <H
            {...props}
            ref={(el: HTMLElement) => {
              const depthIndex = depth - index + 1;
              if (!anchorLinks[depthIndex]) {
                anchorLinks[depthIndex] = {};
              }
              anchorLinks[depthIndex][anchor] = el;
            }}
          />
        </React.Fragment>
      );
    },
  };
}, {});

const parseAnchor = (name: string) => name.split(' ').join('-').toLowerCase();
