import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdClose, MdMenu } from "react-icons/md";

function Nav() {
  const [isActive, setActive] = useState(false);

  const openMenu = () => {
    setActive(!isActive);
  };
  const closeMenu = () => {
    setActive(!isActive);
  };
  return (
    <header>
      <div className="flex align-center justify-between">
        <MdMenu className="burger" onClick={openMenu} />
        <div className="logo">
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsMydata="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 550 470"
              mydataCompanyname="Roni Egbu"
              mydataContrastcolor="ffffff"
              mydataId1="497"
              mydataId2="19"
              mydataLayouttype="undefined"
              mydataPresentation="2.5"
              mydataSpecialfontid="undefined"
              mydataTemplate="BlackAndHighlightColorHex1"
            >
              <g
                fill="#c8c9c7"
                //   strokeMiterlimit="10"
                data-paper-data='{"isGlobalGroup":true,"bounds":{"x":65,"y":172.39125795338174,"width":420,"height":125.21748409323646}}'
                fontFamily="none"
                fontSize="none"
                fontWeight="none"
                textAnchor="none"
              >
                <g data-paper-data='{"stacked":true,"isPrimaryText":true}'>
                  <path
                    d="M387.105 221.654c-2.252 0-4.413-.99-5.944-2.702L365.04 200.67c7.565-.9 13.419-6.484 13.419-13.329 0-7.475-6.935-13.509-15.49-13.509h-21.615l.63 1.081c1.982 0 3.513 1.531 3.513 3.512v39.627c0 1.981-1.531 3.512-3.512 3.512l-.63 1.08h15.22l-.631-1.08c-1.981 0-3.512-1.53-3.512-3.512v-42.869h10.176c4.864 0 8.826 5.404 8.826 12.068 0 6.665-3.962 12.068-8.826 12.068h-7.925s3.873 4.323 5.764 6.485l11.978 13.599c1.801 2.071-.09 2.161-.45 2.161h-.09l-.63 1.08h16.39z"
                    data-paper-data='{"glyphName":"R","glyphIndex":0,"firstGlyphOfWord":true,"word":1,"line":1,"firstGlyphOfFirstLine":true}'
                  ></path>
                  <path
                    d="M405.837 185.54c-.81 0-1.62.09-2.431.18 5.493.45 11.257 6.755 13.599 15.49 2.341 8.736.54 17.022-4.053 20.084 6.754-2.792 11.528-9.456 11.528-17.202 0-10.266-8.286-18.552-18.553-18.552zm-11.077 21.524c-2.342-8.735-.54-17.021 4.052-20.083-6.754 2.792-11.527 9.456-11.527 17.201 0 10.267 8.285 18.553 18.552 18.553.81 0 1.621-.09 2.432-.18-5.494-.45-11.258-6.755-13.6-15.49z"
                    data-paper-data='{"glyphName":"o","glyphIndex":1,"word":1,"line":1}'
                  ></path>
                  <path
                    d="M454.74 220.844c-.99.54-2.612.63-2.882 1.8h15.4c-.18-.36-.45-.63-.81-.81-.901-.54-2.162-.81-2.882-1.62-.63-.721-.63-1.802-.63-2.793.09-5.764 0-11.798.09-17.561 0-3.873-.18-8.286-3.063-10.898-2.071-1.891-5.133-2.251-8.015-2.251-6.304 0-8.916 3.602-8.916 3.602a8.687 8.687 0 013.422-1.26c2.162-.36 4.503-.09 6.214 1.26 2.882 2.252 3.153 6.394 3.153 9.997v17.021c0 1.441-.09 2.972-1.081 3.513zm-13.059.09c-1.17-.63-1.26-2.252-1.26-3.693V185.36c-.18.18-3.783 3.152-9.637 3.602h-1.441c.18 1.081 1.981 1.171 2.792 1.621 1.26.81 1.35 2.522 1.35 3.963v22.425c0 1.44-.18 3.152-1.44 3.963-.991.63-2.522.63-2.792 1.71h15.22c-.27-1.08-1.801-1.17-2.792-1.71z"
                    data-paper-data='{"glyphName":"n","glyphIndex":2,"word":1,"line":1}'
                  ></path>
                  <path
                    d="M484.1 221.384a3.42 3.42 0 01-3.423-3.422V185.18s-4.233 3.692-11.077 3.692l.63 1.081a3.613 3.613 0 013.603 3.602v24.587a3.42 3.42 0 01-3.423 3.422l-.63 1.08H485zm-6.665-40.887a4.036 4.036 0 004.053-4.053 4.036 4.036 0 00-4.053-4.053 4.036 4.036 0 00-4.053 4.053 4.036 4.036 0 004.053 4.053z"
                    data-paper-data='{"glyphName":"i","glyphIndex":3,"lastGlyphOfWord":true,"word":1,"line":1,"lastGlyphOfFirstLine":true}'
                  ></path>
                  <path
                    d="M372.493 273.767c-.679 3.818-4.751 6.788-9.673 6.872h-10.945v-43.356h10.945c4.922.084 8.994 3.054 9.673 6.872l1.018.424-1.103-8.57h-31.054l.594 1.019c1.867 0 3.31 1.442 3.31 3.31v37.332c0 1.866-1.443 3.309-3.31 3.309l-.594 1.018h31.054l1.103-8.57-1.018.425zm-10.69-15.697h-7.128v1.358h7.212a4.382 4.382 0 014.412 4.412l1.018.594v-11.285l-1.018.594c0 2.46-1.951 4.412-4.497 4.327z"
                    data-paper-data='{"glyphName":"E","glyphIndex":4,"firstGlyphOfWord":true,"word":2,"line":2,"firstGlyphOfSecondLine":true}'
                  ></path>
                  <path
                    d="M405.414 246.446c-1.443 2.376-5.515 2.46-7.976 2.46-2.036-1.357-4.412-2.036-6.873-2.036 3.564 1.188 5.091 8.315 5.091 11.71 0 2.969-.933 8.399-3.733 9.417 5.43-.594 10.351-4.751 10.351-10.52 0-2.631-1.103-5.007-2.885-6.873.51 0 1.019.084 1.613.084 1.866 0 5.515-.254 5.515-2.46 0-.764-.425-1.443-1.103-1.782zm-17.988 27.32c-2.121 0-3.648-.848-3.648-3.139 0-1.527 1.612-2.46 2.97-2.46h3.393c-3.733-.933-5.345-8.4-5.345-11.879 0-2.8.763-7.806 3.309-9.248-5.091 1.018-9.503 5.006-9.503 10.521 0 4.073 2.545 7.551 6.109 9.333-2.885.849-4.751 3.394-4.751 6.364 0 2.63 1.357 4.666 3.902 5.515v.17c-4.072 1.187-6.533 4.581-6.533 8.823 0 6.958 5.685 9.588 11.71 9.843-4.413-.679-6.704-4.327-6.704-9.673 0-6.703 3.224-8.824 8.91-8.654 5.26 0 8.484 2.036 8.484 8.4 0 4.836-2.376 8.484-6.194 9.672 6.788-1.272 10.945-6.278 10.945-13.745 0-10.012-9.672-9.842-17.054-9.842z"
                    data-paper-data='{"glyphName":"g","glyphIndex":5,"word":2,"line":2}'
                  ></path>
                  <path
                    d="M428.407 246.955c-1.527 0-4.836.849-5.515 2.46.764-.339 1.612-.424 2.46-.424 6.619 0 11.116 7.722 12.473 13.406.424 1.782.594 3.564.594 5.346 0 5.43-2.46 13.066-9.079 13.066-5.515 0-9.418-5.43-9.418-10.606v-39.03c-2.63 2.291-7.042 3.48-10.436 3.48l.594 1.017a3.404 3.404 0 013.394 3.394v42.933l1.018-.594c.51-1.527 1.782-2.545 3.394-2.545.849 0 1.442.254 2.206.678 2.8 1.612 5.176 2.546 8.485 2.546 9.503 0 16.46-8.315 16.46-17.479 0-9.163-6.957-17.478-16.46-17.478z"
                    data-paper-data='{"glyphName":"b","glyphIndex":6,"word":2,"line":2}'
                  ></path>
                  <path
                    d="M463.788 278.518c-3.224-1.442-3.733-5.006-3.733-8.315v-23.418h-10.436l.594 1.019a3.223 3.223 0 013.224 3.224v21.042c.34 5.515 5.176 9.842 11.115 9.842 2.8 0 5.77-1.188 7.212-2.545-2.46.254-5.6.17-8.23-1.019zm21.212-.17l-.594-1.018a3.404 3.404 0 01-3.394-3.394v-27.405h-10.436l.594 1.018a3.223 3.223 0 013.224 3.224v30.885s3.988-3.48 10.436-3.48z"
                    data-paper-data='{"glyphName":"u","glyphIndex":7,"lastGlyphOfWord":true,"word":2,"line":2,"lastGlyphOfSecondLine":true}'
                  ></path>
                </g>
                <g data-paper-data='{"fillRule":"nonzero","fillRuleOriginal":"nonzero","isIcon":true,"iconStyle":"standalone","selectedEffects":{"container":"","transformation":"","pattern":""},"bounds":{"x":65,"y":172.39125795338174,"width":235.36674342737177,"height":125.21748409323646},"iconType":"initial","initialText":"RE","rawInitialId":1050,"suitableAsStandaloneIcon":true}'>
                  <path
                    d="M95.16 196.55c-1.236 6.3-2.47 12.601-3.83 18.902-.123.494-.37.865-.741 1.235-2.471 2.1-5.065 4.2-7.536 6.425-5.56 5.065-10.872 10.377-14.95 16.925-1.358 1.977-2.47 4.2-2.964 6.672-.618 2.965.865 5.436 3.706 6.424.741.247 1.606.618 1.977-.37.37-1.113-.618-1.236-1.36-1.483-1.976-.742-2.717-2.1-2.347-4.2.371-2.225 1.483-4.325 2.842-6.302 3.953-6.053 9.019-11.242 14.331-16.06 1.977-1.73 4.077-3.46 6.3-5.436v.741c-1.111 6.3-2.1 12.478-3.211 18.655-.124.37-.495.865-.742.989l-4.818 2.594c-.741.494-1.73.865-1.235 1.977.37 1.112 1.482.74 2.347.617 1.112-.123 2.347-.37 3.583-.617-.124.494-.124.864-.124 1.235-1.359 9.884-2.718 19.644-3.953 29.527-.37 3.212-.37 6.424-.37 9.513 0 .865.493 1.73.864 2.471.247.618.865 1.112 1.606.618.741-.371.494-.989.37-1.606a14.04 14.04 0 01-.74-3.089c0-1.977 0-4.077.247-6.054 1.359-10.748 2.841-21.496 4.324-32.245 0-.617.247-.864.74-.864 8.031-.989 16.062-1.112 24.092-.124 7.907.865 15.69 2.594 23.35 4.695 12.601 3.459 25.08 7.165 35.457 15.566.37.247 1.235.247 1.606 0 .618-.494.247-1.112-.247-1.606-.124-.123-.37-.37-.618-.494-4.57-3.83-9.636-6.548-15.196-8.895-8.154-3.46-16.802-5.807-25.573-7.907-13.22-3.212-26.686-5.065-40.276-3.583-.988.124-1.976.124-2.841.247-.124-.123-.124-.247-.247-.247.37-.247.617-.741.988-.865l7.042-3.335c18.532-8.772 36.94-17.79 54.854-27.674 9.142-5.066 18.284-10.254 26.932-16.308 3.212-2.224 6.425-4.571 9.019-7.66.618-.865 1.359-1.853 1.73-2.965.864-1.977.123-3.706-1.73-4.571-.988-.37-1.853-.618-2.841-.741-4.448-.494-8.772.247-13.096 1.112-8.895 1.853-17.42 4.694-25.697 7.906-18.408 7.043-35.828 15.814-51.765 27.427-.124.124-.37.247-.618.37 0-.246 0-.493.124-.617.988-5.189 1.976-10.378 3.088-15.566.741-3.707 1.73-7.413 2.471-10.996.124-.741.37-1.482-.618-1.853-.865-.37-1.235.247-1.606.988-.741 1.483-1.482 2.842-2.1 4.448-.618 1.483-1.112 2.965-1.359 4.448-.37 1.235.123 1.606 1.359 1.606zm-5.436 41.51c.37-2.347.741-4.694 1.112-6.918.741-4.2 1.359-8.525 2.1-12.725.247-.618.494-1.235.988-1.606 9.39-7.166 19.397-12.972 29.898-18.285 13.837-6.918 28.045-12.601 42.87-16.678 5.065-1.236 10.13-2.347 15.32-2.471 1.358-.124 2.965.124 4.447.37 1.359.371 1.853 1.236.988 2.595-.988 1.483-2.1 2.842-3.459 4.077-3.83 3.46-8.154 6.3-12.478 9.142-12.972 8.03-26.438 15.32-40.152 22.238-13.59 6.795-27.303 13.343-41.016 20.014-.124.124-.371.124-.618.247zm138.987-33.48c0 .124.124.247.124.247-.618.988-1.112 1.853-1.73 2.718-2.47 3.212-4.942 6.3-7.536 9.39-10.748 12.972-21.373 25.944-31.01 39.904-5.189 7.413-10.254 14.825-14.454 22.856-1.73 3.336-3.089 6.795-3.707 10.501-.741 4.571 1.606 7.413 6.178 7.413 2.1-.124 4.2-.494 6.3-1.112 7.413-2.1 14.455-5.436 21.497-8.772 15.32-7.165 30.145-15.32 45.217-23.35 16.308-8.648 32.492-17.79 49.17-25.82.495-.247.989-.495 1.236-.865s.247-.865.37-1.36c-.493 0-.988-.37-1.482-.246-1.606.865-3.212 1.606-4.818 2.47-16.555 8.772-33.11 17.42-49.665 26.192-14.454 7.783-29.033 15.567-43.981 22.609-6.054 2.718-12.108 5.56-18.532 7.289-2.1.617-4.2 1.235-6.424.74-2.1-.246-2.965-1.358-2.965-3.458-.124-2.471.74-4.819 1.606-7.042 2.47-5.807 5.806-11.12 9.265-16.432 11.12-17.172 23.72-33.357 36.817-49.17 2.965-3.707 5.93-7.413 8.895-11.243.741-.865 1.235-1.853 1.73-2.841.617-1.73-.371-2.842-2.1-2.595-.866.247-1.607.371-2.348.742-4.324 1.853-8.525 3.706-12.725 5.436-3.583 1.606-7.166 3.088-10.749 4.57-.617.124-1.235.124-1.976.371.247-.865.494-1.359.741-1.853 1.112-1.482 2.1-2.965 3.212-4.324 9.266-10.501 19.397-19.89 30.392-28.415 1.606-1.236 3.212-2.347 4.818-3.583 0 .124.124.124.124.247-.989 1.112-1.977 2.348-2.965 3.46-1.606 1.976-3.336 3.83-4.695 5.806-.494.741-.618 1.73-.618 2.594-.123.248.494.742.865.742.247 0 .618-.494.865-.865.37-.741.494-1.606 1.112-2.224 1.853-2.347 3.953-4.695 5.93-7.042l2.594-3.336c.371-.617.742-1.359.124-2.1-.618-.741-1.483-.37-2.224-.123-.618.37-1.359.74-1.853 1.112-4.818 3.83-9.76 7.412-14.455 11.242-7.66 6.548-14.949 13.466-21.496 21.126-1.606 1.853-2.965 3.83-4.077 6.054-1.112 2.1.247 3.83 2.594 3.335a45.42 45.42 0 005.807-1.853c5.806-2.47 11.49-5.189 17.296-7.783 1.235-.494 2.47-.865 3.706-1.359z"
                    data-paper-data='{"isPathIcon":true}'
                  ></path>
                </g>
                <path
                  d="M316.762 297.609V172.39h1.306V297.61z"
                  data-paper-data='{"isShapeTextSeparator":true}'
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <nav className={isActive ? "open" : null}>
          <MdClose className="close" onClick={closeMenu} />
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
