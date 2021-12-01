import { Project } from './project.model';

export class PortfolioService {
  private projects:Project[] =[
    new Project(
      'BlackJack',
      'BlackjackText',
      'https://play-lh.googleusercontent.com/009hpXoLRxULWBEF8VsHnNTjFrOQVFKfkQfIxZcDGWtVSZEU5mKtSJyy3Zv3pxVcZQ',
      ''),
    new Project(
      'Testing',
      'Questions',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAB3VBMVEX////9zZ0BAQGMbe5VVVUAAFYAAFn//v8AAFT///0AAF2RcfUWE10hHWc3LH4AAFtJOpb09PcAAE6BZ+Ti4+6lorcVFFcLBV0VE1txcJNMPZyQcfATDVN1XdBlZI6FhaHl5emYmrLZ2eRpUcD6z5q5t8e2nYfOzNZC7EMRDFpVU4SursHpwZwAAGP2AH9ZWYH85s730+T67PbIxtL2HIb4hrgvn04cBmb2WqT4jrn3YaL1fbH/1Zvi4uK5utD0//8mX1hERESVlZVoaGgAAEj/z6b5AHr94Oz938A0NDQfHx8kJCR1dXXS0tKCgoIhF2j/8dOvkog+5USznvLKtfn/5tf61q+tra1OTk4mJGM6OnGcm7lzX8ovLGuYf+2bg+W0o+1fWo6DgauJhLZLR31mUcKsqclvb4w1LXF6cX7Gro1hVXZhUKwcG1Xdz8N3X4SQh5ujmaPuosXzP497ZnvrwN2TdIFiUmPnZKh9e5f5pcvGuLTctpWgieW8pvnxTpdQPHbuJ5GYgn3CnZo9pkc8vkguelA/1kYmM2ItWWclaFVF/TchPV8/mlT42acmSmNLOaSmmtVOPlszilWyoYLOs4k9OGPkqsOLg8VRRpNjTHhMRYOciHUAADwSDiXbyOR9AAAgAElEQVR4nO2djUPbRrbo5SaSpUGuYgcsOSQYiDAdsIwBZx0SJW4gBqdNKkjACSYmjcttAmxyU75SCG0ad9Ptbu6yr72v5G133/tb34xkY0mWZdmWadK9JwH8IUvz8zkzc+bMmRFBNCIMQQw+G1pc9L0Lktsd8BOMtyEARzKYIwFkFfYdEAHyEr1EMIzbjH0kG4TKh++G+GCQ5Yb8hGpg7kk4IMAP75/oeDek+9wZVqDyfsbrJuQALcDz6Own3hHp6LjvY7kRFwkJws+ziPHEie5jRqn5Tnd3x2klSA64CdnHBc90dJdOf1yIJ+7csaIrP+q4fxYuugmZh+zpEmTHidPHIeeWH5z+/PPTD5bPLWM5/eD0svZGRb3dpwRy0DVE5gopnCqdu+OPPCsIAlxE3EKDwud8Dj/D8kNL4YehUKFQyC0VwoWloaX8Uh6iN1j+/hHkuSC35BojM0gLfyxDnkKF5Xn6i0Ke4xsTbqVQoJwdSpM9Qz2hnlAhF14prBRyhYeFx0uLAL0jBM+UDbb79Fkq5BokcZWG/1GuCadYGEJS+DIcaljCXzo+tGfp6tJS16MvB8JXC1cLX/Zd3b2qvnyWPVNpFFi+xy1IgrhKnj1fgaTa4E45lc6AoIMU3IUM6iBJv3tnblQ6A8H/gWxB/gfyWKUtkF7Vz3cA6fqox1pch2TQeE377wiS8V/pdU2u9Pq1ArQdkiB6B7qGxzuJ8fqQ/nCeJl0TGslKl8U4ymVIbKWPOZKjALkS4oP/YQ85CEk0WpeAe8JDOt/JmOuB65CPaDYoJDnpLEyy9ppk+q8rUiAUdlMeBZKQ9psN1l1IhhjhFFoBq2vFdRq51RXf1QoyCOmQ222uf4gCQ+Zolcua7OPgk1tPwaLHI0f/EwhKaahlCTlMgRBuJrx60d5Cf721han9Fvqac/D6YFsheymBerow+wzMpWVRXpXKg2ZLyBGe7q3uRMZGR0fHUoQ3VfMiqZQ/ZeMIj1MgTLQTMiSRX83G40+pVVFOp6MC6+uuba4KXGFMkP6NzVgslki82rMx47GLsct2oSiSH2kfJMP4KZiPI3lB3vR4RFHe4s+eqw3J8fqQErK01HYCAcY02a4ZBp6IJaa3ayua4OBQ+1pXhhggwTOkyNldMOcRUbWcA8L52uZKGSCRgb6dRoibFyYubMYSsem3ta6jQtqUg2ovZIijnmJNgkVkrR6P5xeAKqVDSG9qFKkxMZrC8hY9nB6tcR3/S2SuNpWyzZAUzGHGu2BHlD3YYHnhQ6eQKe8mMtax0jMEHNsktKpVKrAX9X4pDJdCD7zq84oQulrYVkiiN8A/wtb6GEQxI5K8c0gCaS+2ndJaFCZVskkv4x8b0z7JjKGHqu8/NjaGmtfUmE70mm0v5ADF4bb1ReB5WhRFrMqcoDjW5GYisZk66inHUPW8jPXzdSxxQXvpYix2IcVgLSONe1MprSFWJTbKONdkazGeXUA+nV2YDf1zTdOjR8wHHWtyDCly4+iZl7iMAHB3eEmFLUPiv9iUx5CyN2MvNc5YI5DdD/KgFcjHMD87O/siH14oMYqKc8iZi4nYzFHHkEptIHvFNdQEyZQhU8Tli3t7ly5evIibZL17YA/5zXwh0AKknxQeP7u7S9IvFsQSpBQ85RRyFDH4db0fRplBha0BqTVBKfT/AjLXMcLrFHL525YgxymWJimOf5GJlyD3QenkDiDfospXOYQhZqaREdaGLB2WIjZwe2U8r70m73xBtwC5JHHfR+bWxGwmk9YgIxJ73qkm3yKz00OOTttqsnQYs42eXDAy1YH8tqdpSNRV9fCcR0Z9h+wRS3VyToL3nUJijVQO8eLS29ZJ7SjcCF80OYD1Wley6dYVdcg+mPMYRN7hWRvf1QiJoXQ+DrOHUHBZbSAR2ku1QprO275+kukMwC3RCLkO4QmnkKgLSUxUzkYg/+dlCqnIDhK7DKj3ODZI5J1z0pwR0nOoaL6AY2dAy0DBxjeDir+HnqUuJRLYKfB6Uy8TRkhvahvV272qsWU7IcMU2DcyRlnlQ8eQBBqDxCZUt86rIWtVFDkFL1NerNOECZLBX8TXqSpfvZ3mugKpAyPkvsTaRQZMkMRLnc9zGY1C8GNvak/tFVFnsYEGYkZNYt1bjEbaCOmH8DvZCBkBZ8871yQxgxqR6cszfsI/inkvq0ONFOovEy9n/GN7MdxZYG+h7NZhx297bEYVv46qjZD9NL9jhBR3OHiuAUhiVA0MJDYT05iHUTsGBnvo+PXp2KtSE1TSJB5il8MIaIR9LEOtLgAiRkWKv0L2tE2MxzRoRj9jX8fKI4sN1cPDUTs0RlYHGl9vT8cuqeY6HZtGBrw3jY8tQW4fjyaHoCSmDYzyIuuzi7tWaRLJzARqQzHUdOLSxPaYqkvv3qtE4tJ2amZiYgM3pZ0XJib8XmIb/SnLhZkGhlrNQ6IqeWiwVtETBeypBiHRKDGFquTlmGqKpXAVehH/SeGQQEqdMFNDAUaO9g+a0SnHSVQl9d2kmI6A4Hk7SMCbC0NoBor+jF7eRBWz5K/hkLEWUVZTHPFDHJImdNEPr25mgG4TpJfY5ch9oybFomQ/F7LCQ4tptpKkiJm9DYKw6CHqSS8tPWqPJr0+ftFjcup+hfaQfYDqqjkNi5RF2MRWbWQXVCXPuVMnmfEAvyoaKWWlzqxWb0Chxpu6nJ0M03DRHF93qeHZ5ThTB4LaHaHOJGwfFQyExvvdlIGegEJfNV/IpTpJwbzZWr+n6s1PErsUywPaVUnC611V5XMH8ipqW0UT5E49TSKbGvCRFODqCFXvAN2h1PXcYHU9d8dcRyDYNw2zxJ9hPXPFHcJgV189qX9ERYb7rYrnCqQ/wOZkE2SWFOqYK6Eq090sF+suqXVI5IB0BarGy559UK91JdqSx4Oz6M1JAxpk9wktG745SGIFklETo2cOKHXNtS3CEH2BR8aXSpq8f//86aYhO0m4blakuAUVX9shLS2hP2DOMtcgO07BQLOQeIWLZO4kPaKPrV8nmVRp3k0VL9E7aCG9phnnlN4XtDi+/xByJpenpMkzAjzXNGSe5dLmtnWfYuvXSeRkp3QB/v7rlIVc76x95aXroOp4DsIRa9+1Fch+0hyLxDPpkjBSv+EZ29jbqIRNBziBN3eKvDH3f2b07cbe21F1qIL+h0AwaZJgUCDNSSUuQPZRVdYqilv82R2+LiQe3VeCrQMUFR4e7tLLcIindZAzamQEjar3UirGLkj+7Q8G+dsTlqX87kOuwEDaYzbX7+CT70FdyE0c2NBB0lUO+wCn0yROK8DBDhzwIrAXjiA/MsibP0mC+5AM00nzz01hOo/nAMCtSB1IL6GmQsSOJgcGKDRIMjWYw5xek6MI8e3bvc1y2gSC/LMB8naSZQX3IVExqj0BTwRwc/Ug1cQA9G+CKAXBHUFOI0P1v8LhdUId/Nw2QH7Mo/aOdB+yB5D7ZkZxlef260MihbxMxDa9TGOQ6gTJhAaZfP2DTpd/AMKPf4Gc++aah4tVivQcQvqgHqQaQEU/0zOlTsSZuaaYFJ6w28bfzC4IStKTI2XeDirJ13/l3W94eqnqDsQTJfl1uS4kstZLqc2EltPhEDIR29i7jBhfqt3rLmD/kkx+XIb8azL51zcfJ90316scN1dlrREJFOW5epCorG9Te6ha+p1DxrSw7CstEwI3PD8qyT9ojK+l4OLtjz5Ouq/JJVIyVck07iVRPa2nSdy2+pmxyuSrI00iSNRXJr5Wo1yoTn70OqmgJhab7I9JjFsTsuPM2eunO5qCHOEV0wgkLaNeEhzUhcRpGy838VzxBeeQsdj29sbFaTznheskB26/+UFi/wsr8ockjw23JmT3/TNnmnTQF/lDcy8pihGlKNeFTFTEeeuK59hTqXImk9aF/B0mf/jooz9LLPyzHeSJ7g51IrFxSD9ETUxV4+rB4UlbSG9qdBob3rSaUjXqHHK6NHunZk0gc0WQf04Gk6/f/BeU/vbGFrIkjUNeoUFR79OJB+XUD4/9NAHSBm4iU17cvl5WmxFnkPjvtgHyoz8ln/h+SMK/v7ltA4m0uLzcHOQ4DSKVcZYoivHSMwRJBmprkvGqc8l4bDiB29eUU8gY+jOGXIhXqrkC1eN58wNqfBT+9Ue3b9eExMWY/wbbK801CjlMSWtlRjETz2Tj2Qz+H8/EXxRGfrpzolYeTyUbZ7Scieysdb18+SL2eNWJ91DJrftvqOBFzX95/eb2G2vI/3Vn/vMT8w8+n7/zoFCojszaSx/gjnoQBDibjWdKgiCHfrpT01xRj/6yNNmRKE0hO+snE9PTiRgehSBNdvEY8vUTLggBkHhe+gFr0soZ+Mf8nfnlecQ4/81Sz5cNQoYBF63UR6TE+EF2QQN9EUaQtabT/aige6WiTKDWp1QnqyL8wxRp6kKwL3BpVJvVG8ijLuQPANH9Wpwr/iwpyY/ffMxb+6535h/MP1j+FkEODTcIGQJ89KhKxjFkNl5Spq0mvTOjo+VX/KOjM4QGuXTLFLEJ6yG9KTUPYsybKs3pXc0nX/+JfyJtRWUkBxFSSf733y0d9FPfziPIb+a/nX8QbhiyR1KOGLMLOkQMOWJjruraHq3ohJZUjiBZYAp/kBRrgGRw2hJxlN98NSckk6xUlOVocWtrTkaUUo2hFtYjQlye/6ZxyBV+sTxlJyJABJmZxZjo50WoUNtcMWAp6oZ/q5Ntg9e15YE6ISnqeiXyj5cwpVK6vPo+QAEWHspyUQI0Lf0sFylWIX3mNTVYk/PzSI+f49/IXBsMaudg7gjSk84eiFkxm8Wd5UE68mHOTpNVwhDjwxZiN4XpHR5+xEv/21OUgl89fboO5uTHAujrNR+GNbm8vNyN/qHfuWCjmynkdZAifoQnt9Tf8tzDvp8eNABZS2y+dqTTPgB+SVPBp7Px2afgUJ6TQF/VYViTZbek4wRsOAf9MX8oVo+ZNWdA+bG844ZjSKZa7I8nQhIf3ZdWZ1FVmR0h10SefWwF2ZJb57OBBPodI9o1FxJGmoxyQ3F1jRi3Ja/DQFU0uq2QxzHh08WBXw5yADMuzPoUMUJV22urkIu4TroEaW2bdvaKPjAOQFEu0ncx5ew68kwkvGLRKK1C5t2DZIjOwcFbZhm0mQpBvc74VRxO2pfWVcgfkWeyziN7dXf9ZJ5vBVJbcMYQ2qxPfwD3k+aF9YHOI8WUNH3kCxB96BNCkMuKPgE1r/Ew91z0zElcl8uQK3y+6TqJ85FSfrzeLFUaTwrAlAZB8QaPp4xZdusegaDEKVwEOQOHXz3L0T7kYkZJfshlyCF+0Txt51yT/o1LOPj2ckIbcw1Q1K5xvgdP+OgddO/Y6Pb29qg/VRq/7AKqq4+WtkR5lZMA959RWRTlX3my193IQA/PRpuETG2o2bo4/jaRcjYKuTCtZrfGXuL8SXXQTDOoWQByWtyPrGkLGuU5QA27CxmipKYgGbXEOCEZh3lGHYY/cIAvpuYxT6jr1xGknwiTlXE7lqgEh4wnaRUyTEtRi0CWA8gNrMU9ZKhj2xNaU+IIcmJ0e2IzltASsjEkMxjgt8RKwyCLh3iw5SZkH1eVpuQI0utHlXFzLKXyEl7CKaS6fktdu60GsjAkscj65EowTUS9JjVg2C+yVcguwK2ZZ2Ad1cm96aql2U4g1c+oy9Q2SpBqOGtNd2V5n5RGCDchB0gpYtm81oN8iWd7jE29Y0iC2Z5OXDqCHKf0CxmQ5R5CYyyrVchx0mIK1gGkP6Ff3WsDyYPxyktHkP7pxOYRJEEHH+vbBbEokQP6xJhWIftJqdhMwzNWtbbTGnKwUNDlBB5BEgbIECfpGwZxnwOP3NRkb3USqDPIaV2ygB3kw1BvDUimDMmMA7hjKEO+p+BmnfTDpNVcSH1zRZo0b3xhaa5DBQvI1Mz0q5fEkSaZgGGYIIqruYedLkKisVbVrJYTSC/q0i+bMuktIJnBL6w0SbzVluOXNEn00JR+klRee9ijj5K3DJmzShmoD0l8XVo7qBtDOjFXzca9m9rMQgmSuXpdKlZKkZY94UKP7kwtQz7kBUu/rh4kXnH9tVdN6y03hJaQXxR69a2rCum9HNMWFZbMlfDTMCfLlUt7dhaT4xV/oGXIsG4ypAHIFHEJUb7cxogzb20mYfnAoAFyY3R0I4Gn4FPeCiQxwuvsVUT2ytG7lU64Zciu5iC9xJi2kPDVq8T09Extt46i9JDapkQJbKyMHnKY4+b0y+HSQaioH1OD83rIjm517w9GdYmOjEi9bO1ACxoLfd+MueJZxuny/iRqehUeT1YNtQYovcdzWZ3wmZ7+ekxrsxCkVko/Bw0BNXErSd7SvkxC06Q2hXii+/yHQRZezy35y2GJ8fDQUM9Sp91O98w4Ceasmtf6kN7U9iU8zoptXhgrDbXovnGThIE+gXBse29vbwPPFHlLkNyAdlyOlfT5GXKEI8Oahgb7QkN88JSqye77ihBkeR5CkuxTldcncXizYxAI+WvftYC5RYJic5pUhx9jM2P+0oJ0YoDzkVULPRRj+EP7IFOCDAGBwnEgilQEg3sppjmYx7oZeMwBAFmWVc53dHefgQJP5da31qHE0iHkHa6QAi+xeUgqUq52pI25wjUNaZbBAGexZue65VIPTcIBbekMIlXgzwZ/YIun+7X7BgDg83G8cvZMx5kgC1b307Kc9hQ5JRBmcoDn0QtidG4RUlWRTB2kBFZdgiTGuyxk3GZ9obcyL5RjKYO9znFcHxEmWbAViYri/o6kwFNnFWpOltEwRZQ9+7QCRgB/uC/KIhqDit8JXPUkShmyF7gHWeMStSF1330X0LcNYjpL8UO3uCAXQQxpvGRVEgSB+l72lDZfkecAy7O+clhDjgIBVG1CWYHkVi0Yj22aoCydAahzokW8Jwf7mJXK4HK6KLH6IzxyDrKgKJc6HjzFGRiu1Yv0c1zxXYBE/iXQjd5FMSKhdvSwnFaEVCWwIFIJYqTlImBBtJyQI4pRUBWvPRLUW1uOmo8dsk8iI4agHa8IQPcK6jq5tcrXgGolCB5B4hdWYM0yhniqGY/HfekP8FuG+MA6rxh2I4lQOKpXeS7neOoX3fHF6nXCJfGy7GNno5Am1mA3JjnI6wuAl6bw+gZX9EFFtzYwLRYlSa/pfcBbzbN7sdNo3g3j6CIRjtVBgj6r/sFFGR7iDUuOUSVjoQFSzcLVyT4l7ei1koO01ZfHEItJ2tJakawBVpdAyLq4s7KlUCzLGxLF5Z+hwVzl74Fpm4Cddf1zeYevXpeCpYvEFcF68m4fCGeO7hcSOGsrwaD9+/UlGBQExWcwpSLqOg0v7EcNO3eIaAiqe0GOAC5soUg/LUhVKyc9Wu2WDxYFpbt0A5+Oc3Xl/v36x5g+YXp+KsjpJ0XEKA2q0uNtxQd9FgOuMEdZ1MhsWvuedgD7x/I9fE7YSndH93LDN23qwB/SPz931ti+eva/t2gustZ251HXfJqTKpC31UkGlep4ZDYe1x5EOQFvyKPeJagewZ15i/sL1ZHl+fll/fNuls0bt+awYsxkalGKcwB0GZ1IhmB6eIvIspjNxjVDl3ckVjnnREPdHcufNwzZ3fGNCfKUYB2lMELGRetpY6QVmh8xe8qDAfNOdeXTaA9kz3OOhWfOObl72bd37jR+x7NvP182vHAf8qvW/ZkzSM8hcnpMdXKFBRGLw7PxTOmRmH4uCUH+w1Nn6soXP/0fB0cZ5R8//fQPwwunzPZqBRmvaa6oPeY4UycyQPO/Wp9SNyM6p43L60gQQpoWGr0NIaRoGNTflhD91LdXT+2vQVwjgbETYXyseaO68ll0nU86XVznSc6q9+Y4gEpFqcP/AE0GAg1u8xEIkIA2JY8q1mEKSwVYvJcmYa5irl6G6CO5LTld+xNHn0QVuobsL7LksL/p24P4e8eHhwf9uhN0Cthe62DWlrS8LgSuHMXtvMgPUGC1H9CIqMkoIW3Lq4YFf2g4T1EUOMR5yOVXewBnPbvvTJBTTw5XIIldiSrKdrrXCd5n2iTqhveSkPc2vTdGZ47keSDxkFzprbQTNWKHzkRErigO4pXP1kuyiw5stfb50MicY2nbxDk7YTpxY7U196/nyOOg+ssF81Pw0KZlqSsyy+cqgZ4RCURagkSMPnq8+dvQDknwMIqGh/J+Tgpe7y8HLkZgwDqvyGGxtiDdW54zGKef5NJNf2NpOS2vSiwa2DR949LBQFCBgfU1dCbxuaTA3tLrw5T0r+YZ8b4sVGk+hmFyghRp3irE9MG6FAxUTXw4FTX1XMiN5MgAjsaJ64A/LJUMjYuqNltpRPYlsqBew8sMA+FX2bzNUAOQaz4IwaAtSB3IMEk+nY2/kKh93ITleCqsLb0ghvjqbXMaKFk6CHOla/hUz6IJSLzKQI7ukFDKdxJ2t4qoQ0l00fSL2Xj8K3Idf9dREKS0+s10VW/S0VD51iFQZ+iJPso0cGtA5PRckOfpRy0G7/oBrd7sIUeq1WYO+cjYtfYyvTR87rBns6Qs8tSgmkVNKQHrrMH6iGIxLyk0PdDi7b3VBFB8b5KnpNqTyVu8NEJo2zyxXPPtq5iOUOSSuhSDlBrrcbEvm8azKpEtTmKpwK6fYVqDxDsNJtdn4wuzq6CIfeWDPMQTkow6KWIVEHAqUY4LofP000pjfgDq+D37a5HVFeyfUDRO52j5Bub41lIA18q4Qkaxee5LQW1Dpd7rlqusnQkq6aLa8gzx1nPLNpBRDkiARy5KIN/XS9Rdt+NAvMw4KeQXUK38Ci+6Q4WLSE8odSozD5Wm7TUtyoeQ9hLjgA5nVK/VKSneBVUhKVoZ6uvXtOCC4NsEkF/NLqBaqUUD5CLgg72oExkGeFKkcWWqLjX2eaheojBE3jpIZw7ETBZJGv2r15ekRYkNdg30uzkb4sU5HQq1gDRJlfLqxHWS70HDk37fw2di5kArXKZmqMMCUv1fBHQ/ES4sMX5UGQ4W4up6yWy83nnELbxUo3RjSpeE0Xqy0OxCjlLD4CIa6hw+RGVDr39RqBSudgSyijGbxZQRCbmbV8bx8GhBPcOBusDX/jSy5xeSTboFZwD1sXTXInfUZYtiaKUn7Ce+zH2xv3CwoBXOISJ2bbRQ6pq2t66mjoUFBLlQHxI7EeRwqz2GJeTVgADISnRb9kQL4Z4eprMQfjbbBKR2cBTfK6/sozOMuri3HqSY/gXAfI3FZq0xYkcVPKuEYNJyJrPbE3rY+7CwMls2M+eQ2bhW8SBnmMFTMeP1zPVnWGtys2XppdhgxR0XPZlMPNyzWygs/fMprk2ZhUwDkGImgyff04umZSUMk81k6kBGpKodAV0TJswB3XSdmM1kM3P/HHnYk+vCD7MHmbhzt6UczDksjUPK10A/C7P2kHIe7yHYJkjU9kCwVtnRGncBckQBkD2rvpaJLzh3C8o7sxzC6gXDzEJWrO32y3NAS0psE+RVGh6at+0+KEogp3YrmUy2YacAtZM+81Vwwlu8tjtwwLJ0P9N0lKMeI0OMmCedxDQaC6ypty4pBQYbhlSqINX/mVof+ZdEhoi2aRI1sKjtoQ2uKnI/1Qa3vPlBo4Ig2RqXW8h4rKKwIg47tstWNenjLLZ5bEEszFUTZI7MrIUPK+5IlPkutC4Lw+TYGouMmoT82bzR79Gl8A/uSw1XE6MUS9oky7oCSQzSQrD5+Y8qkb8zdiHm6zFx02z2lmRzjwW3IIld6eyWe5TiIj9kczlzCyTvU8pZon39R/m6fpg031qnFUjeMjHLeMmsp2y08jrkGt36pinKcTqoRGtPkjfGuA+4Z/UuSBCz5Q54DSDrbrMatWuGLDYpbxZyDpg337a4Impo41n18EO+lRmdRiCZPATFFmZf9ZBFGthkvesFOf/i95RdDXZX+ikWrDmdLrUVPGhyFqdB320Gh72an+5oTBiiiwwmoy7USjHKwkNnF8U3RxrmcFjpmITB264dHjQ1P2OEjHAWWzPVFBaad6doq/hzybPrrRusvAUph1USiff/kqHjaHXKwnRCntwSW1alwNdw6iwv2t/VrgGWpXiZfpold+qOrdKZrN3bEUqyyHmtedH28VgLQ4zTClc3IyWbqTks9Kgp3A1Y67ELDgcOBBSwU8di07aQaZ7Pux9XdFNUSnJVTtspEycQ1ng7LafXKKmeT/cbC2oDBiiWQq2PTWJKNpOt+R3IniLXhpu2uSr4/njjNMut20WvtGmdGpDyFk/3/tYYDqQfQP7HaHNdiSiOQHhcN1RqQRii08dDuNaUt473f/G9+5DI/cBreFl1TNIwJtbkewCpChMCQVB9V4j6InvWIf2eQBJEF6VIucazcETP6vvR8BDaDpMBVDEjcoNjL1Es8sc2PHRBOnNkEOw4SR/XQ8oRQB1HVMolYYgCGZS+azDXRVtD+U67dTrBg7yrNC9wkcb6EhkIxxJ7c086DwELtqru+WULuY43Snt/BA9LwrQg5dYaaWWLEhh/v1SJ9/GlFbCldibO9PmLBBoYNL8LgnTpH6EVXlqNyg7VmRZsp3veQVEzFQdYKshTRWdOniius1Tvb13uJoTpEzjWfBvpWpDpOYls9HYi74j08MYtYGtbq6zujvHeCcN4mXGKv1nXxVMNWoz3XG/01gXviDAS+6O9h4cDBplMZhankr7bkazasmva/cQCUsxocG4mrB6nMMwgnbTcGqkkspid9aqZwq4m5R6roFJDYdG6fcXLcQ4WmOMPhrstSDth2nohBWLMIMTUe6o+neDWBEDzoiRRTR5d0JZ4/T4kD4PGwSVqarLx915/RukDxtUsGqH3/TdTvVyh+OcHnnKX71H7i98XIZYcvvGnutmbjCpiqv4H3j9hiD5OUnfnyS4w7Uj7fxcE3xkc/ir/7poaozDMigAWfpcVUS8DwPmY/+R7K4n4w/4AAAFLSURBVP/vmtMjiQ/+DeTfD/Lkzd+qGO0VHeTJDyavfHDy0w9u3PhE/ffpb1eqBuWTT0oPblxDP+jZp9dQ+W8cvV+BvOLtnbx1l/DeJHqv+G9duXlr8nhL2oJcO3kT/Zu6+cHUyakP7p2cmkKNzZTOLI8gP711g7h769YN/6R3yj915b2CvHHtxrWpe1P3Prg3de2Dm9fuIS3eu3bt5NH7FU1O+RHkJ1eISf/J9w1SlU8/qfnWEeQN4p7/7i2EN+lXNTn1vkFi+fSG5ctHkPeIu0iT6NckgSB7r9zyTx5X0VqVqcnPPpu8O/nZB5M3b979DD1BlXLys8nJI+KKud6dnLz52Wd3J6fuXpu8hn6/P5r8FEPemLx5cnJqcnLq5tTkPfTz2c2b18oH1HIGJq8Q722nOWV+oRbktamTNd55D+Xfz637vcq/BeT/B2fjp4fl2x0mAAAAAElFTkSuQmCC',
      ''),
    new Project(
      'Roulette',
      'Casino',
      'https://static.educalingo.com/img/it/800/roulette.jpg',
      ''),

  ];

  getProjects() {
    return this.projects.slice();
  }
}