import CustomBarChart from './CustomBarChart';
import WrappedCustomBarChart from './WrappedCustomBarChart';
import DICard from './DataIntegrityCard';

const cardLayoutProperties = {
  config: [
    {
      i: 'a',
      title: 'Component A (default: 8x6)',
      actions: [
        {
          id: 'DivBy2',
          displayName: 'Divide by 2',
          iconURL: 'SV_ANN.svg',
        },
        {
          id: 'MulBy2',
          displayName: 'Multiply by 2',
          // iconURL: 'SV_ANN.svg',
        },
        {
          id: 'FromConfig',
          displayName: 'From Config',
          iconURL: 'SV_ANN.svg',
          onClick(actionId) { console.log(`Action Id: ${actionId} Card Id: ${this.props.id}`); },
        },
      ],
      Content: WrappedCustomBarChart,
      dataSource: 'card1Data',
    },
    {
      i: 'b',
      title: 'Component B (default: 2x2)',
      Content: WrappedCustomBarChart,
      dataSource: 'card2Data',
      listeners: [
        {
          id: 'MulBy2',
        },
      ],
    },
    {
      i: 'c',
      title: 'Component C (default: 2x4)',
      Content: WrappedCustomBarChart,
      dataSource: 'card2Data',
    },
    {
      i: 'd',
      title: 'Component D (default: 2x2)',
      Type: DICard,
      Content: CustomBarChart,
      dataSource: 'DIChart1',
      listeners: [
        {
          id: 'DivBy2',
        },
      ],
    },
    {
      i: 'e',
      title: 'Component E (default: 4x2)',
      actions: [
        {
          id: 'DivBy2',
          displayName: 'Divide by 2',
          iconURL: 'SV_ANN.svg',
        },
      ],
      Content: WrappedCustomBarChart,
      dataSource: 'card1Data',
    },
    {
      i: 'f',
      title: 'Component F (default: 10x2)',
      actions: [
        {
          id: 'DivBy2',
          displayName: 'Divide by 2',
          iconURL: 'SV_ANN.svg',
        },
      ],
      Content: WrappedCustomBarChart,
      dataSource: 'card1Data',
    },
    {
      i: 'g',
      title: 'Component G (default: 2x2)',
      actions: [
        {
          id: 'DivBy2',
          displayName: 'Divide by 2',
          iconURL: 'SV_ANN.svg',
        },
      ],
      Content: WrappedCustomBarChart,
      dataSource: 'card1Data',
    },
  ],
  layouts: [
    {
      breakpoint: 'lg',
      layout: [
        {
          i: 'a', x: 0, y: 0, w: 8, h: 6,
        },
        {
          i: 'b', x: 8, y: 0, w: 2, h: 2,
        },
        {
          i: 'c', x: 10, y: 0, w: 2, h: 4,
        },
        {
          i: 'd', x: 8, y: 2, w: 2, h: 2,
        },
        {
          i: 'e', x: 8, y: 4, w: 4, h: 2,
        },
        {
          i: 'f', x: 0, y: 6, w: 10, h: 2,
        },
        {
          i: 'g', x: 10, y: 6, w: 2, h: 2,
        },
      ],
    },
    {
      breakpoint: 'sm',
      layout: [
        {
          i: 'a', x: 0, y: 0, w: 8, h: 6,
        },
        {
          i: 'b', x: 0, y: 6, w: 8, h: 2,
        },
        {
          i: 'c', x: 0, y: 8, w: 8, h: 4,
        },
        {
          i: 'd', x: 0, y: 12, w: 8, h: 2,
        },
        {
          i: 'e', x: 0, y: 14, w: 8, h: 2,
        },
        {
          i: 'f', x: 0, y: 16, w: 8, h: 2,
        },
        {
          i: 'g', x: 0, y: 18, w: 8, h: 2,
        },
      ],
    },
  ],
};

export default cardLayoutProperties;
