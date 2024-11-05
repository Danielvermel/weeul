# Save this as check-ssh-key.sh
if [[ $PWD == *"/Dev"* ]]; then
  ssh -T github-personal
elif [[ $PWD == *"/CS"* ]]; then
  ssh -T gitlab-work
else
  echo "Not in Dev or CS folder"
fi
