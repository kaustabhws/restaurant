interface StarIconProps {
    fill?: string;
    className: string;
}

const StarIcon: React.FC<StarIconProps> = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 980 980"
      version="1.1"
    >
      <defs />
      <path
        fill={fill}
        d="M 289.481 514.352 C 289.481 514.352 364.542 498.687 392.106 478.552 C 418.843 459.022 441.147 423.173 453.561 396.811 C 463.177 376.391 461.962 337.442 467.881 337.146 C 474.152 336.832 477.397 380.519 490.554 402.181 C 507.603 430.251 539.615 468.257 569.909 486.309 C 597.378 502.678 661.369 501.744 661.793 510.772 C 662.172 518.827 614.364 523.621 590.792 537.024 C 562.613 553.047 525.659 576.48 506.663 605.043 C 487.782 633.432 488.81 707.006 476.831 707.667 C 464.477 708.349 455.739 631.012 433.275 602.656 C 411.15 574.728 379.404 552.932 343.777 538.218 C 302.161 521.031 194.929 517.867 195.21 514.352 C 195.432 511.57 289.481 514.352 289.481 514.352 C 289.481 514.352 289.481 514.352 289.481 514.352 C 289.481 514.352 289.481 514.352 289.481 514.352"
        data-bx-d="M 289.481 514.352 R 392.106 478.552 R 453.561 396.811 R 467.881 337.146 R 490.554 402.181 R 569.909 486.309 R 661.793 510.772 R 590.792 537.024 R 506.663 605.043 R 476.831 707.667 R 433.275 602.656 R 343.777 538.218 R 195.21 514.352 R 289.481 514.352 R 289.481 514.352 Z 1@86bbdcc2"
      />
      <path
        d="M 466.357 159.48 C 466.293 159.823 463.533 189.748 460.222 225.98 C 451.979 316.204 449.484 336.506 443.16 364.855 C 434.464 403.831 419.132 435.766 400.599 453.505 C 384.86 468.569 361.011 480.942 332.72 488.721 C 308.868 495.279 286.644 498.895 249.241 502.303 C 223.694 504.631 114.006 513.359 110.324 513.357 C 100.563 513.35 120.42 516.04 227.95 529.29 C 276.176 535.232 299.223 538.957 320.964 544.322 C 387.651 560.779 420.631 586.938 437.257 636.562 C 446.374 663.774 450.552 689.722 455.743 751.355 C 457.156 768.13 460.095 800.305 462.275 822.855 C 464.454 845.405 466.238 864.493 466.239 865.272 C 466.24 866.051 466.472 866.458 466.753 866.176 C 467.436 865.494 476.923 787.543 482.25 738.855 C 487.896 687.243 494.876 652.884 504.85 627.604 C 510.776 612.584 512.763 608.696 520.176 597.613 C 542.209 564.674 583.084 545.648 653.741 535.444 C 661.441 534.332 680.341 532.047 695.741 530.365 C 735.002 526.078 821.366 515.361 823.594 514.5 C 824.613 514.106 799.863 511.652 768.594 509.047 C 703.469 503.62 682.646 501.408 658.668 497.369 C 595.149 486.668 552.783 469.775 528.457 445.45 C 506.716 423.709 494.219 392.68 487.339 343.355 C 486.226 335.38 483.741 311.726 481.817 290.79 C 478.031 249.617 467.007 155.979 466.357 159.48 M 466.906 344.355 C 466.594 345.73 465.17 352.705 463.742 359.855 C 458.394 386.629 452.163 406.405 443.121 425.3 C 435.522 441.182 428.196 452.157 418.018 462.909 C 391.949 490.45 355.304 506.418 295.241 516.41 L 287.741 517.658 L 304.239 520.985 C 352.268 530.671 383.404 542.818 408.372 561.61 C 439.081 584.722 457.178 620.212 466.626 675.855 C 468.17 684.946 469.208 688.978 469.586 687.355 C 469.906 685.98 471.105 679.905 472.251 673.855 C 478.757 639.491 488.889 611.003 502.127 589.855 C 525.298 552.839 567.476 530.412 635.68 518.845 C 643.896 517.451 650.766 516.163 650.947 515.983 C 651.128 515.802 645.98 514.664 639.508 513.455 C 605.16 507.036 573.388 496.9 551.483 485.371 C 510.413 463.755 488.158 433.935 475.186 383.14 C 474.022 378.583 471.81 367.43 470.271 358.355 C 468.521 348.04 467.26 342.792 466.906 344.355"
        stroke="none"
        fillRule="evenodd"
        fill="#080808"
      />
    </svg>
  );
};

export default StarIcon;