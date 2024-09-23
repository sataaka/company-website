# ベースイメージとして公式の軽量なNginxイメージを使用
FROM nginx:alpine

# 作業ディレクトリを設定（NginxのデフォルトのWebルート）
WORKDIR /usr/share/nginx/html

# ローカルディレクトリの全ファイルをコンテナ内のWebルートにコピー
COPY ./ /usr/share/nginx/html

# Nginxのデフォルトポート80を公開
EXPOSE 80

# Nginxのデフォルトの起動コマンドを使用するためにCMDは不要
